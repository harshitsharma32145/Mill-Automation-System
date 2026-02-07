import { useEffect, useRef } from 'react';
import './GoogleTranslate.css';

/**
 * GoogleTranslate Component
 * 
 * A production-ready React component that integrates Google Translate
 * for runtime translation without requiring API keys or backend.
 * 
 * Features:
 * - Loads Google Translate script dynamically (only once)
 * - Supports English, Hindi, and Arabic
 * - React 18 & StrictMode compatible
 * - Prevents duplicate script injection
 * - Clean, minimal styling
 * - Works globally across the entire app
 */

const GoogleTranslate = () => {
    const googleTranslateRef = useRef(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        // Check if script is already loaded or being loaded
        if (scriptLoadedRef.current || window.google?.translate) {
            // If Google Translate is already initialized, just initialize the element
            if (window.google?.translate && !googleTranslateRef.current?.hasChildNodes()) {
                initializeGoogleTranslate();
            }
            return;
        }

        // Check if script tag already exists in DOM
        const existingScript = document.querySelector('script[src*="translate.google.com"]');
        if (existingScript) {
            scriptLoadedRef.current = true;
            // Wait for script to load if it's still loading
            existingScript.addEventListener('load', initializeGoogleTranslate);
            return;
        }

        // Define the callback function that Google Translate will call
        window.googleTranslateElementInit = () => {
            initializeGoogleTranslate();
        };

        // Create and inject the Google Translate script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        script.async = true;
        script.defer = true;

        // Mark script as loaded when it finishes
        script.onload = () => {
            scriptLoadedRef.current = true;
        };

        script.onerror = () => {
            console.error('Failed to load Google Translate script');
            scriptLoadedRef.current = false;
        };

        document.body.appendChild(script);

        // Cleanup function
        return () => {
            // Don't remove the script on unmount to prevent reloading
            // Just clean up the callback
            if (window.googleTranslateElementInit) {
                delete window.googleTranslateElementInit;
            }
        };
    }, []);

    /**
     * Initialize Google Translate Element
     * This function creates the translation dropdown
     */
    const initializeGoogleTranslate = () => {
        // Prevent multiple initializations
        if (googleTranslateRef.current?.hasChildNodes()) {
            return;
        }

        try {
            if (window.google?.translate?.TranslateElement) {
                new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en', // Default page language
                        includedLanguages: 'en,hi,ar', // English, Hindi, Arabic
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                        autoDisplay: false,
                        multilanguagePage: true,
                    },
                    'google_translate_element'
                );
            }
        } catch (error) {
            console.error('Error initializing Google Translate:', error);
        }
    };

    return (
        <div className="google-translate-wrapper">
            <div
                id="google_translate_element"
                ref={googleTranslateRef}
                className="google-translate-container"
            />
        </div>
    );
};

export default GoogleTranslate;
