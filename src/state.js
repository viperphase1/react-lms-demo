export class User {
    constructor(email,name,password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
}

const user1 = new User('default@site.com', 'Default', '1234')
const user2 = new User('bill@site.com', 'Billy', '1234')
const user3 = new User('john@site.com', 'John', '1234')
const user4 = new User('mike@bill.com', 'Mike', '1234')
const user5 = new User('david@bill.com', 'David', '1234')
const user6 = new User('fred@bill.com', 'Fred', '1234')



export var defaultState = {
    users: [user1, user2, user3, user4, user5, user6],
    course: 0,
    page: 0,
    user: 0,
    alldata: null,
    showLoginForm: false
}