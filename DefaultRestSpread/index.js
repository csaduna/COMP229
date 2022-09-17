function add(x, y = 0) {
    return x + y;
}
document.write(add(10) + "<br>");
document.write(add(10,2));

function userfriends(user, ...friends) {
    console.log(user + ' has ' + friends.length + ' friends. They are:');
    friends.map(n => console.log(n));
}
userfriends('John', 'Bob', 'Alice', 'Joanna');

function userTopFriends(firstFriend, secondFriend, thirdFriend) {
    console.log(firstFriend);
    console.log(secondFriend);
    console.log(thirdFriend);
}
userTopFriends(...['Alice', 'Bob', 'Michelle', 'John']);