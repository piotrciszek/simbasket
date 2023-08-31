export interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    type?: 'remove';
    disabled?: boolean;
}

export interface RandomNameDisplayProps {
    randomName: string | null;
    onPickRandomName: () => void;
    names: string[];
    isLoading: boolean;
}

export interface NameInputProps {
    names: string[];
    onAddName: (name: string) => void;
    onRemoveName: (index: number) => void;
}

export type AirportProps = {
    id: number;
    icao: string;
    name: string;
}