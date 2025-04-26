module.exports = {
    isPermission: (permissions, name) => {
        return permissions.find((item) => item.name === name);
    },
};