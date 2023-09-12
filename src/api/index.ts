import axios from 'axios';
import { UserType, NoteType } from '../types';

const api = axios.create({
  baseURL: 'http://localhost:3004/api',
  headers: {
    'Content-type': 'application/json',
  },
});

export async function fetchUsers() {
  try {
    const response = await api.get<UserType[]>('/api/users');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchNotes() {
  try {
    const response = await api.get<NoteType[]>('/api/notes');
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function fetchUser(id: string) {
  try {
    const response = await api.get<UserType>(`/api/users/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
}
