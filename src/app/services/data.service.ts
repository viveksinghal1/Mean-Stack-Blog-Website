import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private colleges = ["GLA University, Mathura, UP",
              "VIT, Vellore, Tamil Nadu",
              "Chandigarh University, Ajitgarh, Punjab",
              "Lovely Professional University, Phagwara, Punjab",
              "SRM Institute of Science and Technology, Kattankulathur, Tamil Nadu",
              "Amity University, Noida, UP",
              "BITS, Pilani, Rajasthan",
              "Jaypee Institute of Information Technology, Noida, UP",
              "Other"
              ];
  private courses = ["BE/BTech", "BBA", "MBA", "MTech", "BA", "MA", "BSc", "MSc", "Other"];

  private passingYears = ["<2000"];
  private jobSince = ["<2010"];

  private categories = ["Data Science", "Web Development", "Art", "Science and Technology", "Job and Interview", "Gaming", "Business", "Economy", "Politics", "Culture",
   "Travel", "Entertainment", "Philosophy", "Self-Improvement", "Others"];

  constructor() { }

  getCollegeList() {
    return this.colleges;
  }

  getCourseList() {
    return this.courses;
  }

  getPassingYears() {
    for (let i=2000;i<2025;i++) {
      let s = i.toString();
      this.passingYears.unshift(s);
    }
    return this.passingYears;
  }

  getJobSince() {
    for (let i=2010; i<2020;i++) {
      let s = i.toString();
      this.jobSince.unshift(s);
    }
    return this.jobSince;
  }

  getCategories() {
    return this.categories;
  }

}
