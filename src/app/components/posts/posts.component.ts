import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import jwtDecode from "jwt-decode";
import {Router} from "@angular/router";
import { PostsService } from 'src/app/services/posts.service';
import { Post } from 'src/app/model/posts';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css', '../styles/css/main.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentUser: User;
  defaultImage: string = "https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png";
  showForm: boolean = false;
  isEdit: boolean;
  currentPost: Post = {
    post: "",
    image: '',
    _id: "",
  }
  constructor(private postsServices: PostsService,  private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    if(localStorage.jwTToken){
      const decoded = jwtDecode(localStorage.jwTToken);
      this.currentUser = decoded;
      this.postsServices.getPosts().subscribe(posts => {
        this.posts = posts.foundPost;
      }, error => {
        this.toastr.error("Please login first", "Login Required", {
          timeOut: 10000
        })
      })
    }else{
      this.router.navigateByUrl("/signin");
      this.toastr.error("Please login first", "Login Required", {
        timeOut: 10000
      })
    }
  }

  onNewPost(post: Post){
    this.posts.unshift(post);
  }

  deletePost(post_id){
    this.postsServices.removePost(post_id).subscribe(data => {
      this.posts.forEach((curr, index) => {
        if(curr._id === post_id){
          this.posts.splice(index, 1)
        }
      })
    })
  }

  updatePost(post){
    this.currentPost = post;
    this.isEdit = true;
    this.showForm = true;
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  }

  onUpdatedPost(post: Post){
    this.displayForm()
  }

  displayForm(){
    this.showForm = !this.showForm;

    if(!this.showForm){
      this.isEdit = false;
      this.currentPost = {
        image: "",
        post: ""
      }
    }
  }

}
