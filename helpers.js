/*
 |--------------------------------------------------------------------------
 | Helpers for working with user's data.
 |--------------------------------------------------------------------------
 */

module.exports = {
    /**
     *  Get user by id.
     *
     * @param {Object[]} users
     * @param {int} id
     * @return {Object|null}
     */
    getUserById: (users, id) => {
        let user = users.filter((user) => {return id === user.id})[0];

        return user ? user : null;
    },

    /**
     * Update user by id.
     *
     * @param {Object[]} users
     * @param {Object} userData
     * @param {int} id
     * @return {Object|null}
     */
    updateUserById : (users, userData, id) => {
        let updatedUser = null;
        users.forEach((user, index, users) => {
            if (user.id === id) {
                for (key in user) {
                    if (key in userData) {
                        users[index][key] = userData[key];
                    }
                }
                updatedUser =  user;
            }
        });
        return updatedUser;
    },

    /**
     * Delete user by id.
     *
     * @param {Object[]} users
     * @param {int} id
     * @return {Object|null}
     */
    removeUserById: (users, id) => {
        let removed = false;
        users.forEach((user, index, users) => {
            if (user.id === id) {
                users.splice(index, 1);
                removed =  true;
            }
        });
        return removed;
    }
};