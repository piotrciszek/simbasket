import predefinedNames from "../data/predefinedNames";


export function addName(names: string[], newName: string): string[] {
    return [...names, newName];
  }

export function pickRandomName(names: string[]): string {
    if (names.length > predefinedNames.length) {
      const randomIndex = Math.floor(Math.random() * (names.length - predefinedNames.length)) + predefinedNames.length;
      return names[randomIndex];
    }
    return '';
  }

  export function removeName(names: string[], setNames: (names: string[]) => void, index: number) {
    if (index >= predefinedNames.length) {
      const updatedNames = names.filter((_, i) => i !== index);
      setNames(updatedNames);
    }
  }
