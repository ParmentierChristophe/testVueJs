// var things = ['Rock', 'Paper', 'Scissor'];
// var thing = things[Math.floor(Math.random()*things.length)];
//
// var el = document.getElementById('demo');
// if (el) {
//   el.addEventListener("click", function() {
//     alert('The computer chose:' + thing);
//
//   }, false);
// };


new Vue({
  el:'#root',
  data: {
    newName: '',
    names: ['Crispy', 'Thomas', 'Thierry', 'Hachemi', 'Matthieu', 'Ellen', 'Mathieu'],
    message: 'Hello world'
  },

  methods: {
    addName(){
      this.names.push(this.newName);
    }
  }
})
