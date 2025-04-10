import usuarios from './users.js';
import {showAllUsers, showUsersGender} from './manageUsers.js';
document.addEventListener('DOMContentLoaded', function() {
    showAllUsers(usuarios);
    showUsersGender(usuarios, "F");
});