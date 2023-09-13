import React from 'react';
import exp from 'constants';

export interface UserType {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  age: number;
}

export interface NoteType {
  id: string;
  title: string;
  description: string;
}

export type Nullable<T> = T | null;

export enum SortOrder {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface Column<T> {
  key: string;
  label: string;
  sortValue?(item: T): number | string;
  render?(item: T): React.ReactNode;
  header?(): React.ReactNode;
}

export interface HasId {
  id: string;
  [key: string]: any;
}
