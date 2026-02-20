// Elementos DOM
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalTasksEl = document.getElementById('total-tasks');
const completedTasksEl = document.getElementById('completed-tasks');
const pendingTasksEl = document.getElementById('pending-tasks');

// Estado da aplicação
let todos = [];
let currentFilter = 'all';

// Carregar tarefas do localStorage
function loadTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
        todos = JSON.parse(savedTodos);
    }
}

// Salvar tarefas no localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Gerar ID único para cada tarefa
function generateId() {
    return Date.now().toString() + Math.random().toString(36).substr(2, 9);
}

// Criar elemento HTML de uma tarefa
function createTodoElement(todo) {
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    todoItem.dataset.id = todo.id;

    todoItem.innerHTML = `
        <div class="todo-checkbox ${todo.completed ? 'checked' : ''}" onclick="toggleTodo('${todo.id}')"></div>
        <span class="todo-text">${todo.text}</span>
        <div class="todo-actions">
            <button class="todo-btn edit-btn" onclick="editTodo('${todo.id}')" title="Editar">
                ✏️
            </button>
            <button class="todo-btn delete-btn" onclick="deleteTodo('${todo.id}')" title="Excluir">
                🗑️
            </button>
        </div>
    `;

    return todoItem;
}

// Renderizar lista de tarefas
function renderTodos() {
    const filteredTodos = getFilteredTodos();
    todoList.innerHTML = '';

    filteredTodos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        todoList.appendChild(todoElement);
    });

    updateEmptyState();
    updateStats();
}

// Obter tarefas filtradas
function getFilteredTodos() {
    switch (currentFilter) {
        case 'completed':
            return todos.filter(todo => todo.completed);
        case 'pending':
            return todos.filter(todo => !todo.completed);
        default:
            return todos;
    }
}

// Atualizar estado vazio
function updateEmptyState() {
    const hasTodos = todos.length > 0;
    const hasFilteredTodos = getFilteredTodos().length > 0;

    emptyState.style.display = hasTodos && !hasFilteredTodos ? 'block' : 'none';
    todoList.style.display = hasFilteredTodos ? 'flex' : 'none';
}

// Atualizar estatísticas
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const pending = total - completed;

    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}

// Adicionar nova tarefa
function addTodo() {
    const text = todoInput.value.trim();

    if (!text) {
        showNotification('Digite uma tarefa válida!', 'warning');
        return;
    }

    const newTodo = {
        id: generateId(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.unshift(newTodo); // Adiciona no início da lista
    saveTodos();
    renderTodos();

    todoInput.value = '';
    todoInput.focus();

    showNotification('Tarefa adicionada com sucesso!', 'success');
}

// Alternar status de conclusão da tarefa
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        renderTodos();

        const action = todo.completed ? 'concluída' : 'marcada como pendente';
        showNotification(`Tarefa ${action}!`, 'success');
    }
}

// Editar tarefa
function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (!todo) return;

    const newText = prompt('Editar tarefa:', todo.text);
    if (newText && newText.trim() && newText.trim() !== todo.text) {
        todo.text = newText.trim();
        saveTodos();
        renderTodos();
        showNotification('Tarefa editada com sucesso!', 'success');
    }
}

// Deletar tarefa
function deleteTodo(id) {
    if (!confirm('Tem certeza que deseja excluir esta tarefa?')) return;

    todos = todos.filter(t => t.id !== id);
    saveTodos();
    renderTodos();
    showNotification('Tarefa excluída!', 'success');
}

// Filtrar tarefas
function setFilter(filter) {
    currentFilter = filter;

    // Atualizar botões de filtro
    filterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.filter === filter);
    });

    renderTodos();
}

// Mostrar notificações
function showNotification(message, type = 'info') {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Adicionar estilos inline para a notificação
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '8px',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        animation: 'slideInRight 0.3s ease-out',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    });

    // Definir cores por tipo
    const colors = {
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6'
    };

    notification.style.backgroundColor = colors[type] || colors.info;

    // Adicionar ao body
    document.body.appendChild(notification);

    // Remover automaticamente após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in forwards';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Adicionar estilos de animação para notificações
function addNotificationStyles() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }

        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Limpar todas as tarefas concluídas
function clearCompleted() {
    if (!confirm('Tem certeza que deseja excluir todas as tarefas concluídas?')) return;

    todos = todos.filter(t => !t.completed);
    saveTodos();
    renderTodos();
    showNotification('Tarefas concluídas removidas!', 'success');
}

// Event Listeners
function initEventListeners() {
    // Adicionar tarefa
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });

    // Filtros
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setFilter(btn.dataset.filter);
        });
    });

    // Limpar tarefas concluídas (pode ser adicionado depois)
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'k') {
            e.preventDefault();
            clearCompleted();
        }
    });
}

// Função de busca (opcional para futuras expansões)
function searchTodos(query) {
    return todos.filter(todo =>
        todo.text.toLowerCase().includes(query.toLowerCase())
    );
}

// Inicialização da aplicação
function init() {
    addNotificationStyles();
    loadTodos();
    renderTodos();
    initEventListeners();

    // Focar no input ao carregar
    todoInput.focus();
}

// Inicializar quando DOM estiver pronto
document.addEventListener('DOMContentLoaded', init);