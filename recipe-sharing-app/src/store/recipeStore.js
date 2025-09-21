import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Action: Add new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Action: Replace all recipes
  setRecipes: (recipes) => set({ recipes }),
}));
