import React, { useEffect, useState } from 'react';
import { useRouter } from '../../hooks/useRouter';
import './table.styles.scss';

interface User {
  email: string;
  name: string;
  role: string;
}

interface TableProps {
  headers: string[];
  rows: User[];
  onSelectedItemsChange?: (selectedItems: string[]) => void;
}

export const Table: React.FC<TableProps> = ({
  headers,
  rows,
  onSelectedItemsChange = () => {},
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const { setLocation } = useRouter();
  const renderHeaders = () => {
    return headers.map((header) => {
      return (
        <th key={header} className="table__column-header">
          {header}
        </th>
      );
    });
  };

  useEffect(() => {
    onSelectedItemsChange(Array.from(selectedItems));
  }, [onSelectedItemsChange, selectedItems]);

  const renderRows = () => {
    return rows.map((row, index) => {
      return (
        <tr className="table__row" key={index}>
          <td>
            <input
              type="checkbox"
              onChange={(e) => {
                const isSelected = e.currentTarget.checked;
                if (isSelected) {
                  selectedItems.add(row.email);
                } else {
                  selectedItems.delete(row.email);
                }
                setSelectedItems(new Set(Array.from(selectedItems)));
              }}
            ></input>
          </td>
          {headers.map((key) => {
            if (key === 'email') {
              return (
                <td key={key}>
                  <button
                    className="table__link"
                    onClick={() => {
                      setLocation({ name: 'user', params: { user: row } });
                    }}
                  >
                    {row[key as keyof User]}
                  </button>
                </td>
              );
            } else {
              return <td key={key}>{row[key as keyof User]}</td>;
            }
          })}
        </tr>
      );
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th></th>
          {renderHeaders()}
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
