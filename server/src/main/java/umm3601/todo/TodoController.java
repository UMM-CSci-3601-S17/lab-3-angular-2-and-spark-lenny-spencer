package umm3601.todo;

import com.google.gson.Gson;
import com.sun.org.apache.xpath.internal.operations.Bool;

import java.io.FileReader;
import java.io.IOException;
import java.util.Arrays;
import java.util.Map;
import java.util.Comparator;

public class TodoController {
    private Todo[] todos;

    public TodoController() throws IOException {
        Gson gson = new Gson();
        FileReader reader = new FileReader("src/main/data/todos.json");
        todos = gson.fromJson(reader, Todo[].class);
    }

    // List users
    public Todo[] listTodos(Map<String, String[]> queryParams) {
        Todo[] filteredTodos = todos;

        // Filter status if defined
        if(queryParams.containsKey("status")) {
            // Get the string value - complete or incomplete
            String status = queryParams.get("status")[0];
            filteredTodos = filterTodosByStatus(filteredTodos, status);
        }

        // Filter contains if defined
        if(queryParams.containsKey("contains")) {
            String contains = queryParams.get("contains")[0];
            filteredTodos = filterTodosByContains(filteredTodos, contains);
        }

        if(queryParams.containsKey("owner")) {
            // Get the value of the query
            String owner = queryParams.get("owner")[0];
            filteredTodos = filterTodosByOwner(filteredTodos, owner);
        }

        if(queryParams.containsKey("category")) {
            // Get the value of the query
            String category = queryParams.get("category")[0];
            filteredTodos = filterTodosByCategory(filteredTodos, category);
        }

        // Filter limit if defined
        if(queryParams.containsKey("limit")) {
            // Get the value of the query
            int limit = Integer.parseInt(queryParams.get("limit")[0]);
            filteredTodos = limitTodos(filteredTodos, limit);
        }

        if(queryParams.containsKey("orderBy")) {
            String orderBy = queryParams.get("orderBy")[0];
            filteredTodos = sortTodos(filteredTodos, orderBy);
        }

        return filteredTodos;
    }

    public Todo[] limitTodos(Todo[] filteredTodos, int limit) {
        if (filteredTodos.length >= limit) {
            return Arrays.copyOf(filteredTodos, limit);
        }
        return filteredTodos;
    }

    public Todo[] filterTodosByStatus(Todo[] filteredTodos, String status) {
        // If the user provides an invalid value, it would be initialized to 'false'
        boolean convertedStatus = status.equals("complete") ? true : false;
        return Arrays.stream(filteredTodos).filter(x -> x.status == convertedStatus).toArray(Todo[]::new);
    }

    public Todo[] filterTodosByContains(Todo[] filteredTodos, String contain) {
        return Arrays.stream(filteredTodos).filter(x -> x.body.contains(contain)).toArray(Todo[]::new);
    }

    public Todo[] filterTodosByOwner(Todo[] filteredTodos, String owner) {
        return Arrays.stream(filteredTodos).filter(x -> x.owner.equals(owner)).toArray(Todo[]::new);
    }

    public Todo[] filterTodosByCategory(Todo[] filteredTodos, String category) {
        return Arrays.stream(filteredTodos).filter(x -> x.category.equals(category)).toArray(Todo[]::new);
    }

    public Todo[] sortTodos(Todo[] filteredTodos, String criteria) {
        // if criteria is status
        if (criteria.equals("status")) {
            Comparator<Todo> byStatus = (Todo t1, Todo t2) -> Boolean.compare(t1.status, t2.status);
            return Arrays.stream(filteredTodos).sorted(byStatus).toArray(Todo[]::new);
        }
        else if (criteria.equals("owner")) {
            Comparator<Todo> byOwner = (Todo t1, Todo t2) -> t1.owner.compareTo(t2.owner);
            return Arrays.stream(filteredTodos).sorted(byOwner).toArray(Todo[]::new);
        }
        else if (criteria.equals("body")) {
            Comparator<Todo> byBody = (Todo t1, Todo t2) -> t1.body.compareTo(t2.body);
            return Arrays.stream(filteredTodos).sorted(byBody).toArray(Todo[]::new);
        }
        else if (criteria.equals("category")) {
            Comparator<Todo> byCategory = (Todo t1, Todo t2) -> t1.category.compareTo(t2.category);
            return Arrays.stream(filteredTodos).sorted(byCategory).toArray(Todo[]::new);
        }
        // This happens quite often whenever orderBy is undefined
        return filteredTodos;
    }

    public Todo getTodo(String id) {
        return Arrays.stream(todos).filter(x -> x._id.equals(id)).findFirst().orElse(null);
    }
}