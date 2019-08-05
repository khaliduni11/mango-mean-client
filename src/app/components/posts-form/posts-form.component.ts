import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/posts';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-posts-form',
  templateUrl: './posts-form.component.html',
  styleUrls: ['./posts-form.component.css', '../styles/css/main.css']
})
export class PostsFormComponent implements OnInit {
  images: string;
  @Input() currentPost: Post
  @Input() isEdit: boolean;
  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostsService, private toastr: ToastrService) { }
  ngOnInit() {
  }

  addPost(post, image) {
    if (post !== "" || image !== "") {
      this.postService.addPost({ post, image }).subscribe(data => {
        this.newPost.emit(data.foundPost)
        this.currentPost = {
          post: "",
          image: ""
        }
      })
    } else {
      this.toastr.error("empty post and/or image is not allowed", "Form Error", {
        timeOut: 10000
      })
    }

  }

  updatePost() {
    if (this.currentPost.post !== "" || this.currentPost.image !== "") {
      this.postService.updatePost(this.currentPost).subscribe(data => {
        this.updatedPost.emit(data);
      })
    } else {
      this.toastr.error("empty post and/or image is not allowed", "Form Error", {
        timeOut: 10000
      })
    }
  }
}
