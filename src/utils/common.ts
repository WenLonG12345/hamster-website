import { useEffect, useState } from 'react';

export function useFetchAxiosLazy<F extends (...inputArgs: any) => Promise<any>>(func: F) {
  const [result, setResult] = useState<Awaited<ReturnType<F>>>();
  return [
    result,
    (...args: [...Parameters<F>]) => func(...args).then((res) => {
      setResult(res);
      return res;
    }) as ReturnType<F>,
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