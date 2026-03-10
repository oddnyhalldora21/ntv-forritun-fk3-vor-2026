import { useCallback, useRef, useState, useEffect } from "react";
import useDebounce from "@/hooks/useDebounce";

type FormValuesType = {
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    selectedFruit: string
    radioButton: string | null
}

export function useForm() {
    const [values, setValues] = useState<FormValuesType>({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        selectedFruit: '',
        radioButton: null,
    })

    const onInputChange = useCallback((key: keyof FormValuesType, value: string) => {
        setValues(prev => ({ ...prev, [key]: value }))
    }, [])

    const onSubmit = () => {
        const { firstName, email } = values
        localStorage.setItem(email, JSON.stringify(values))
        window.alert(`Hello ${firstName}; email address ${email}`)
    }

    const loadEmailRef = useRef<HTMLInputElement>(null)

    const onLoad = useCallback(() => {
        if (loadEmailRef.current && loadEmailRef.current.value) {
            const localStorageValue = localStorage.getItem(loadEmailRef.current?.value)
            if (localStorageValue) {
                const parsedLocalStorageValue: FormValuesType = JSON.parse(localStorageValue)
                window.alert(parsedLocalStorageValue.firstName)
                loadEmailRef.current.value = ''
                setValues(parsedLocalStorageValue)
            } else {
                window.alert('Email not found')
            }
        } else {
            window.alert('Some bug was found!')
        }
    }, [])

    const debouncedSearchTerm = useDebounce(JSON.stringify(values), 1000);

    useEffect(() => {
        if (values.email) {
            localStorage.setItem(values.email, JSON.stringify(values))
        }
    }, [debouncedSearchTerm])

    return { values, onInputChange, onSubmit, onLoad, loadEmailRef }
}