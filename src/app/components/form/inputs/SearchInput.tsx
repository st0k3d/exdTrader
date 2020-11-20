import React from 'react';
import { Select } from 'formik-antd';

const { Option } = Select;

interface Props {
    name: string;
    passedOptions?: any[];
    style?: any;
    placeholder?: string;
}

const SearchInput: React.FunctionComponent<Props> = (props: Props) => {
  const {
    name, passedOptions, style, placeholder,
  } = props;

  const [selectOptions, setSelectOptions] = React.useState<string[]>([]);
  const [notFoundContent, setNotFoundContent] = React.useState<string | null>(null);

  const handleSearch = (value: string): void => {
    if (value) {
      setNotFoundContent('not found');
      if (passedOptions) {
        const result = passedOptions
          .filter((o) => o.toLowerCase().indexOf(value.toLowerCase()) > -1);
        setSelectOptions(result);
      } else if (!passedOptions) {
        // Use remote data service
      } else {
        setSelectOptions([]);
      }
    } else {
      if (notFoundContent !== null) {
        setNotFoundContent(null);
      }
      setSelectOptions([]);
    }
  };

  return (
    <Select
      showSearch
      name={name}
      placeholder={placeholder}
      style={style || undefined}
      defaultActiveFirstOption={false}
      showArrow={false}
      filterOption={false}
      onSearch={handleSearch}
      notFoundContent={notFoundContent}
    >
      {selectOptions.map((d) => <Option key={d} value={d}>{d}</Option>)}
    </Select>
  );
};

export default SearchInput;
