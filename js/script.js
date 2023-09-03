class ToDo {
  constructor() {
    this.#createToDoList();
  }

  #createToDoList() {
    let script = document.querySelector('script');
    let divWrap = document.createElement('div');
    document.body.insertBefore(divWrap, script) 

    let header = document.createElement('header');
    divWrap.appendChild(header);

    let h1 = document.createElement('h1');
    h1.innerHTML = 'ToDo List';
    header.appendChild(h1)

    let main = document.createElement('main');
    divWrap.appendChild(main);

    let inputBlock = document.createElement('div');
    inputBlock.classList.add ('input-block')
    main.appendChild(inputBlock);

    let input = document.createElement('input');
    input.setAttribute('placeholder', 'Введите новую задачу!')
    inputBlock.appendChild(input);

    let ul = document.createElement('ul');
    main.appendChild(ul)
    
    divWrap.classList.add('wrapper');
    input.classList.add('input-task');
    ul.classList.add('tasks');

// событие добавления через enter
    input.addEventListener('keydown', element => {
      if (element.keyCode === 13) {
        this.#correctInput()
      }
    })
  }

  #correctInput() {
    let valid = document.querySelector('input').value;
    if(valid === '' || valid === ' ') {
      alert('Упс...Кажется была введена пустая строка. Попробуй ввести реальную задачу!')
      
    } else {
      this.#addNewTask()
    }
  }

  #addNewTask() {

    let li = document.createElement('li');
    li.classList.add('newTask')
    document.querySelector('ul').appendChild(li);

    let divCheckMark = document.createElement('div');
    divCheckMark.classList.add('unfinished')
    li.appendChild(divCheckMark);

    let contentOfTask = document.createElement('span');
    li.appendChild(contentOfTask);

    let deleteButton = document.createElement('div');
    deleteButton.classList.add('delete-button');
    li.appendChild(deleteButton)

    let a = document.querySelector('input').value;
    contentOfTask.innerHTML = a;

//очистка поля input
    document.querySelector('input').value = '';

    this.#taskExecution();
    this.#deleteButtonClick();
  }

  #deleteButtonClick() {
    document.querySelectorAll('li> .delete-button').forEach(elem => {
      elem.addEventListener('click', function() {
        this.parentNode.remove()
      });
    })
  }
  
  #checkBoxStyle() {
    this.querySelector('li> .unfinished').classList.toggle('complited');
    this.querySelector('li > span').classList.toggle('compl-task');
  }

  #taskExecution() {
    document.querySelectorAll('li').forEach(elem =>{ 
      elem.addEventListener('click', this.#checkBoxStyle);
    })
  }
}

let TodoList = new ToDo();