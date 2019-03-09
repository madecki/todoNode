class Task {
    constructor(
        name = 'Lorem ipsum',
        desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consequat est nisl, placerat viverra lacus auctor in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae augue lacinia, posuere odio vel, congue leo. Pellentesque cursus, est nec tempus maximus, dolor velit luctus metus, volutpat commodo sapien ante eget eros. Aenean at neque sed ante cursus dictum. Donec condimentum eros ac hendrerit elementum. Sed mi dui, pellentesque ut risus pretium, lobortis scelerisque eros.',
        prior = Math.floor(Math.random() * (2 - 0 + 1)) + 0,
        status = Math.floor(Math.random() * (2 - 0 + 1)) + 0,) {
            this.name = name;
            this.desc = desc;
            this.prior = prior;
            this.status = status;
    }
}

const tasks = [
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
    new Task(),
]

const getTasks = () => {
    return tasks;
}

module.exports = {
    Task,
    getTasks
}
