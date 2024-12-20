# Post List Context

This project includes a React Context and Reducer implementation to manage a list of posts. The context allows different components to access and modify the state of the post list, including adding new posts, deleting posts, and initializing posts with initial data.

## Features

- **Add Post**: Add a new post to the list.
- **Delete Post**: Remove a post from the list by its ID.
- **Initialize Posts**: Load an initial set of posts into the list.
- **Global State Management**: Using React Context and Reducer to share and manage the post list across components.

## Key Components

1. **PostList Context**: 
   - The context provides `postList`, a list of posts, and functions like `addPost`, `deletePost`, and `addInitialPost` to manipulate the list.
   
2. **PostListProvider**: 
   - A provider component that wraps the application and provides the context value to all child components.

3. **Reducer (`postListReducer`)**: 
   - Manages the state of `postList` using three actions:
     - `ADD_POST`: Adds a new post to the list.
     - `DELETE_POST`: Deletes a post by its ID.
     - `ADD_INITIAL_POST`: Sets the post list to an initial set of posts.
