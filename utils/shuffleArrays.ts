export function shuffleArrays(arr1: any, arr2: any) {
  const combined = [...(arr1 ? arr1 : []), ...(arr2 ? arr2 : [])];

  for (let i = combined.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combined[i], combined[j]] = [combined[j], combined[i]];
  }

  return combined;
}
