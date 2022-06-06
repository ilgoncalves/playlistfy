import React, { FC, Ref } from 'react';
import { Dropdown, Text, DropdownRef } from 'react-native-magnus';

interface II18nDropdownProps {
  dropdownRef: Ref<DropdownRef>;
}
export const I18nDropdown: FC<II18nDropdownProps> = ({ dropdownRef }) => {
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
      <Dropdown.Option value="english" py="md" px="xl" block>
        Inglês
      </Dropdown.Option>
      <Dropdown.Option value="portuguese" py="md" px="xl" block>
        Português
      </Dropdown.Option>
    </Dropdown>
  );
};
