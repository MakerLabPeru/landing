import {useState, useMemo} from 'react';

export const useBit = (initialValue: boolean) => {
  const [bit, setBit] = useState(initialValue);

  const memoizedSetter = useMemo(() => {
    const setter = (value: boolean) => setBit(value);

    setter.set = () => setBit(true);
    setter.unset = () => setBit(false);

    setter.toggle = () => setBit(!bit);

    return setter;
  }, [bit, setBit]);

  return [bit, memoizedSetter] as [boolean, typeof memoizedSetter];
};
