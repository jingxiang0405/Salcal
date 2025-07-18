import employees from '../../files/employee.json';
import { writeTextFile, BaseDirectory } from '@tauri-apps/plugin-fs';
/**
 * Retrieves all calculation schemes from the static JSON file.
 * 
 * In a Vite/React project, we can import JSON files directly. Vite handles
 * converting the JSON into a JavaScript object during the build process.
 * The import path must be relative from this file to the JSON file.
 * 
 * @returns {Promise<Array>} A promise that resolves to an array of scheme objects.
 * We wrap the result in a Promise to simulate an asynchronous operation like an API call.
 */
export const GetEmployees = async () => {
    return Promise.resolve(employees);
};
