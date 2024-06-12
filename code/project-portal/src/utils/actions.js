import { json } from 'react-router-dom';
const API_URL = 'http://127.0.0.1:82/apiv1';

//Projects
/**
 * Http request function to fetch projects from the backend
 * @param {string} authToken - autentication token
 * @returns {json} - returns http response as a json
 */
export const getAllProjects = async (authToken) => {
  try {
    const response = await fetch(`${API_URL}/project/getallprojects`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to get all projects.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Get all projects error: ', error);
  }
};
/**
 * Http request to fet a single project from the backend based on its id
 * @param {string} projectId - string id of the project
 * @param {string} authToken - autentication token
 * @returns {json} - returns http response as a json
 */
export const getProjectById = async (projectId, authToken) => {
  try {
    const response = await fetch(
      `${API_URL}/project/getIdWiseProject/${projectId} `,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + authToken,
          'Content-Type': 'application/json',
        },
      }
    );

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        {
          message:
            response.message || `Failed to get project with id: ${projectId}.`,
        },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Get project error: ', error);
  }
};

/**
 * Http post request function to send project data to the backend to create a new project
 * @param {object} projectData - object containing information about the project
 * @param {string} authToken - autentication token
 * @returns {json} - returns http response as a json
 */
export const createProject = async (projectData, authToken) => {
  try {
    const response = await fetch(`${API_URL}/addprojects`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to create project.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Create project error: ', error);
  }
};

/**
 * Http put request function to send project data to the backend to update existing project
 * @param {string} projectId - a specific id related to an existing project in the backend
 * @param {object} projectData - updated oblect containing the new information about the project
 * @param {string} authToken - autentication token
 * @returns {json} -  - returns http response as a json
 */
export const updateProject = async (projectId, projectData, authToken) => {
  try {
    const response = await fetch(
      `${API_URL}/project/editProject/${projectId}`,
      {
        method: 'PUT',
        headers: {
          Authorization: 'Bearer ' + authToken,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectData),
      }
    );

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to update project.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Update project error: ', error);
  }
};

/**
 * Http delete request function to delete project based on its id
 * @param {string} projectId - a specific id related to an existing project in the backend
 * @param {string} authToken - autentication token
 * @returns {json} -  - returns http response as a json
 */
export const deleteProject = async (projectId, authToken) => {
  try {
    const response = await fetch(
      `${API_URL}/project/deleteproject/${projectId}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + authToken,
          'Content-Type': 'application/json',
        },
      }
    );

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to delete project.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Delete project error: ', error);
  }
};

//Tasks
/**
 * Http request function to get all the tasks related to a project based on its id
 * @param {string} projectId - a specific id related to an existing project in the backend
 * @param {string} authToken - autentication token
 * @returns {json} -  - returns http response as a json
 */
export const getAllTasks = async (projectId, authToken) => {
  try {
    const response = await fetch(
      `${API_URL}/task/project/getalltasks/${projectId}`,
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + authToken,
          'Content-Type': 'application/json',
        },
      }
    );

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to get the tasks.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Get all tasks error: ', error);
  }
};

//Comments
/**
 * Http request function to get all the cooments related to a project based on its id
 * @param {string} projectId - a specific id related to an existing project in the backend
 * @param {string} authToken - autentication token
 * @returns {json} -  - returns http response as a json
 */
export const getAllComments = async (projectId, authToken) => {
  try {
    const response = await fetch(`${API_URL}/comments/${projectId}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to get the comments.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Get all comments error: ', error);
  }
};

/**
 * Http post request function to add comment to a project
 * @param {string} projectId - a project id to add the comment
 * @param {object} - object data containing the comment
 * @param {string} authToken - autentication token
 * @returns {json} - returns http response as a json
 */
export const addComment = async (projectId, commentData, authToken) => {
  try {
    const response = await fetch(`${API_URL}/comments/${projectId}`, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to add comment.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Add comment error: ', error);
  }
};

/**
 * Http put request function to edit comment about a project
 * @param {string} commentId - a specific id related to an existing comment in the backend
 * @param {object} commentData - updated comment object
 * @param {string} authToken - autentication token
 * @returns {json} -  - returns http response as a json
 */
export const editComment = async (commentId, commentData, authToken) => {
  try {
    const response = await fetch(`${API_URL}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to edit comment.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Edit comment error: ', error);
  }
};

/**
 * Http delete request function to delete comment based on its id
 * @param {string} commentId - a specific id related to an existing comment in the backend
 * @param {string} authToken - autentication token
 * @returns {json} - returns http response as a json
 */
export const deleteComment = async (projectId, authToken) => {
  try {
    const response = await fetch(`${API_URL}/comments/${projectId}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + authToken,
        'Content-Type': 'application/json',
      },
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || 'Failed to delete comment.' },
        { status: 500 }
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Delete comment error: ', error);
  }
};
