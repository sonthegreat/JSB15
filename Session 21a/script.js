
var app = new function() {
    this.el = document.getElementById('tasks');
  
    this.tasks = [];
  
    
    
    this.FetchAll = function() {
      var data = '';
  
      if (this.tasks.length > 0) {
        for (i = 0; i < this.tasks.length; i++) {
          data += '<tr>';
          data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
          data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
          data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger"><i class="fas fa-trash"></i></button></td>';
          data += '</tr>';
        }
      }
  
      this.Count(this.tasks.length);
      return this.el.innerHTML = data;
    };
  
    this.Add = function () {
      el = document.getElementById('add-todo');
      // Get the value
      var task = el.value;
  
      if (task) {
        // Add the new value
        this.tasks.push(task.trim());
        // Reset ewewewewsedwsedsasdsa value
        el.value = '';
        // Dislay the new list
        this.FetchAll();
      }
      clearInput();
        
    };
  
    this.Edit = function (item) {
      var el = document.getElementById('edit-todo');
      // Display value in the field
      el.value = this.tasks[item];
      // Display fields
      document.getElementById('edit-box').style.display = 'block';
      self = this;
  
      document.getElementById('save-edit').onsubmit = function() {
        // Get value
        var task = el.value;
  
        if (task) {
          // Edit value
          self.tasks.splice(item, 1, task.trim());
          // Display the new list
          self.FetchAll();
          // Hide fields
          CloseInput();
        }
      }
    };
  
    this.Delete = function (item) {
      // Delete the current row
      this.tasks.splice(item, 1);
      // Display the new list
      this.FetchAll();
    };

  
    this.Count = function(data) {
      var el   = document.getElementById('counter');
      var name = 'pending tasks';

       if (data) {
        if(data == 1){
            name = 'pending task'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
    };
    
  }
  
  
  function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
  }


  function actionClear(e) {
    document.querySelector('tr').fadeOut(200, function () {
        $(this).remove();
    });
}

app.FetchAll();
