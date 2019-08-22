import { writable, get } from "svelte/store";

export let nextTaskId = writable(2);
export let tasks = writable([{ id: 1, name: "Default" }]);

export const addTask = task => {
  tasks.set([...get(tasks), task]);
  nextTaskId.update(v => v + 1);
};

export const deleteTask = task => {
  const newTasks = get(tasks).filter(t => t.id !== task.id);
  tasks.set(newTasks);
};
