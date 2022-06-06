import React, { FC, ReactNode, Ref } from 'react';
import { Dropdown, Text, DropdownRef } from 'react-native-magnus';

interface II18nDropdownProps {
  dropdownRef: Ref<DropdownRef>;
}
export const I18nDropdown: FC<II18nDropdownProps> = ({ dropdownRef }) => {
  const Option = ({
    value,
    children,
  }: {
    value: string;
    children: ReactNode;
  }) => (
    <Dropdown.Option value={value} py="lg" px="xl" block>
      {children}
    </Dropdown.Option>
  );
  return (
    <Dropdown
      ref={dropdownRef}
      title={
        <Text fontSize={16} mx="xl" color="gray500" pb="md">
          Selecione a sua ligua favorita
        </Text>
      }
      mt="md"
      pb="2xl"
      showSwipeIndicator={true}
      roundedTop="xl">
      <Option value="english">Inglês</Option>
      <Option value="portuguese">Português</Option>
    </Dropdown>
  );
};
