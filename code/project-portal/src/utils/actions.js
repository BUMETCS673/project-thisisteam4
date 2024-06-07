import { json } from "react-router-dom";
import { getAuthToken } from "./helpers";
const API_URL = ""

/**
 * Http request function to fetch projects from the backend
 * @returns {json} - returns http response as a json
 */
export const getAllProjects = async () => {
  //getting authorization token to append to the headers
  const authToken = getAuthToken()
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "GET",
      headers: {
        "Authorization": "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    });

    //checking if the request has a failed response
    if(!response.ok){
      throw json({message: response.message || "Failed to get all projects."}, {status: 500})
    }

    const data = await response.json()
    return data

  } catch(error){
    console.log("Get all projects error: ", error)
  }
}
/**
 * Http request to fet a single project from the backend based on its id
 * @param {string} projectId - string id of the project 
 * @returns {json} - returns http response as a json
 */
export const getProjectById = async (projectId) => {
  //getting authorization token to append to the headers
  const authToken = getAuthToken();
  try {
    const response = await fetch(`${API_URL}/${projectId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    });

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
    console.log("Get project error: ", error);
  }
};

/**
 * Http post request function to send project data to the backend to create a new project
 * @param {object} projectData - object containing information about the project
 * @returns {json} - returns http response as a json
 */
export const createProject = async (projectData) => {
  //getting authorization token to append to the headers
  const authToken = getAuthToken();
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || "Failed to create project." },
        { status: 500 }
      );
    }

    const data = response.json()
    return data

  } catch (error) {
    console.log("Get all projects error: ", error);
  }
};


/**
 * Http put request function to send project data to the backend to update existing project 
 * @param {string} projectId - a specific id related to an existing project in the backend 
 * @param {object} projectData - updated oblect containing the new information about the project
 * @returns {json} -  - returns http response as a json
 */
export const updateProject = async(projectId, projectData) => {
  //getting authorization token to append to the headers
  const authToken = getAuthToken();
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectData),
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || "Failed to update project." },
        { status: 500 }
      );
    }

    const data = response.json()
    return data

  } catch (error) {
    console.log("Update project error: ", error);
  }
}

/**
 * Http delete request function to delete project based on its id 
 * @param {string} projectId - a specific id related to an existing project in the backend 
 * @returns {json} -  - returns http response as a json
 */
export const deleteProject = async(projectId) => {
  //getting authorization token to append to the headers
  const authToken = getAuthToken();
  try {
    const response = await fetch(`${API_URL}/`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + authToken,
        "Content-Type": "application/json",
      },
    });

    //checking if the request has a failed response
    if (!response.ok) {
      throw json(
        { message: response.message || "Failed to delete project." },
        { status: 500 }
      );
    }

    const data = response.json()
    return data
    
  } catch (error) {
    console.log("Delete project error: ", error);
  }
}

