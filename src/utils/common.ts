import { useEffect, useState } from 'react';

export function useFetchAxiosLazy<F extends (...inputArgs: any) => Promise<any>>(func: F) {
  const [result, setResult] = useState<Awaited<ReturnType<F>>>();
  const [isLoading, setIsLoading] = useState(true);
  return [
    result,
    isLoading,
    (...args: [...Parameters<F>]) => {
      setIsLoading(true);
      func(...args).then((res) => {
        setResult(res);
        setIsLoading(false);
        return res;
      });
    },
  ] as const;
}
export function useFetchAxios<F extends (...inputArgs: any) => Promise<any>>(
  func: F,
  ...args: [...Parameters<F>]
) {
  const [result, setResult] = useState<Awaited<ReturnType<F>> | null>(null);
  useEffect(() => {
    func(...args)
      .then((res) => setResult(res))
      .catch((err) => setResult(err));
  }, []);
  return result;
}