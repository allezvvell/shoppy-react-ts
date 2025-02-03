import { ChangeEvent, useCallback, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import { Wrap, SearchResult } from './styles';
import IconButton from '@components/UI/IconButton';
import { IoSearch } from 'react-icons/io5';
import useToggle from '@hooks/state/useToggle';
import useFetchSearchData from '@hooks/reactQuery/useFetchSearchData';

const SearchBox = () => {
  const { active, toggleActive } = useToggle();
  const [text, setText] = useState('');
  const { data } = useFetchSearchData();
  const [isFocused, setIsFocused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const [filterdList, setFilterdList] = useState<Extract<typeof data, object>>(
    []
  );

  const onSubmitForm = useCallback((e: React.FormEvent) => {
    e.preventDefault();
  }, []);

  const onChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  useEffect(() => {
    const getFilteredList = () => {
      return (data || []).filter(
        ({ title }) => text && title.toLowerCase().includes(text.toLowerCase())
      );
    };

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = window.setTimeout(() => {
      setFilterdList(getFilteredList());
    }, 100);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text]);

  return (
    <Wrap>
      <IconButton onClick={toggleActive}>
        <IoSearch />
      </IconButton>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          onChange={onChangeInput}
          value={text}
          placeholder="검색"
          className={active ? 'active' : ''}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setTimeout(() => {
              setIsFocused(false);
            }, 100);
          }}
        />
      </form>
      <SearchResult
        className={isFocused && filterdList.length > 0 ? 'active' : ''}
      >
        {filterdList.map(({ title, id }) => (
          <Link to={`/product/${id}`} key={title}>
            <span>{title}</span>
          </Link>
        ))}
      </SearchResult>
    </Wrap>
  );
};

export default SearchBox;
