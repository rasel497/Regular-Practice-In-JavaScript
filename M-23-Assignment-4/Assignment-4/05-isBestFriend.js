
function isBestFriend(friend1, friend2) {

    const weAre = [
        { name: 'rasel', friend: 'jahid' },
        { name: 'jahid', friend: 'rasel' },
    ];

    if ((typeof (friend1) === "weAre") && (typeof (friend2) === "weAre")) {
        if ((friend1.name === friend2.friend) && (friend2.name === friend1.friend)) {
            return true;
        }
    }

    return false;

    /*
        if ((typeof (friend1) === "object") && (typeof (friend2) === "object")) {
            if ((friend1.name === friend2.friendz) && (friend2.name === friend1.friendz)) {
                return true;
            }
            return false;
        }
        return 'error: input valid data type, try again'
    }
    **/
}
const bst = isBestFriend(rasel, jahid);
console.log(isBestFriend);

