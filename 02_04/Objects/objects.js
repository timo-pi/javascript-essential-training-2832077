const backpack = {
  name: "myBackpack",
  volume: 30,
  color: 'grey',
  strapLength: {
    left: 26,
    right: 26
  },
  lidOpen: false,
  toggleLid: function(lidStatus){
    this.lidOpen = lidStatus;
  },
  newStrapLength: function(left, right){
    this.strapLength.left = left;
    this.strapLength.right = right;
  }
};

console.log(backpack.color)
console.log(backpack.strapLength.left)