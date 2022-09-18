import { ROLES } from "./roles.enum";

export class User{
    username ='';
    email = '';
    password = '';
    role=ROLES.USER;

    constructor(username,email,password,role){
        this.email = email;
        this.username=username;
        this.password=password;
        this.role=role;
    }

}