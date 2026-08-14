import type { User } from "../types";

import instructorImage from "../../instructor/assets/instructor-profile.png";

export const users: User[] = [
  {
    id: "user-001",
    name: "Dominic Calixtro",
    email: "dominic@dccloudacademy.com",
    role: "instructor",
    avatar: instructorImage,
  },


  {
    id: "user-002",
    name: "Aeya Quilacio",
    email: "aeya@dccloudacademy.com",
    role: "student",
    avatar: "A",
  },

  {
    id: "user-003",
    name: "Claire",
    email: "claire@dccloudacademy.com",
    role: "student",
    avatar: "C",
  },


];