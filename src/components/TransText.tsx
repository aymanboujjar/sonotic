import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface TextProps {
    ar: string;
    fr: string;
    en: string;
}

export const TransText: React.FC<TextProps> = (props) => {
    const { selectedLanguage } = useLanguage();
    const allowedLanguages = ['ar', 'fr', 'en'];

    if (!allowedLanguages.includes(selectedLanguage as keyof TextProps)) {
        throw new Error(`Invalid language: ${selectedLanguage}. Supported languages are: ${allowedLanguages.join(', ')}`);
    }

    return <>{props[selectedLanguage as keyof TextProps]}</>;
};
