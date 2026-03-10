import { Input } from "./Input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup, FieldSet } from "./ui/field";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import { Button } from "./Button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

type FormValuesType = {
    firstName: string
    lastName: string
    email: string
    mobileNumber: string
    selectedFruit: string
    radioButton: string | null
}

type Props = {
    values: FormValuesType
    onInputChange: (key: keyof FormValuesType, value: string) => void
    onSubmit: () => void
}

export function FormFields({ values, onInputChange, onSubmit }: Props) {
    return (
        <Card className="w-3/4 max-w-7xl bg-gray-300">
            <CardHeader>
                <div className="flex items-center gap-2">
                    <div className="grow border h-0"></div>
                    <CardTitle className="text-white">Example</CardTitle>
                    <div className="grow border h-0"></div>
                </div>
            </CardHeader>
            <form onSubmit={(e) => { e.preventDefault(); onSubmit() }} className="w-full">
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <Input className="bg-white" id="firstName" autoComplete="off" placeholder="First Name" value={values.firstName} onChange={(e) => onInputChange('firstName', e.target.value)} />
                        </Field>
                        <Field>
                            <Input className="bg-white" id="lastName" autoComplete="off" placeholder="Last Name" value={values.lastName} onChange={(e) => onInputChange('lastName', e.target.value)} />
                        </Field>
                        <Field>
                            <Input className="bg-white" id="email" disabled autoComplete="off" type="email" placeholder="example@mail.com" value={values.email} onChange={(e) => onInputChange('email', e.target.value)} />
                        </Field>
                        <Field>
                            <Input className="bg-white" id="mobileNumber" autoComplete="off" type="number" placeholder="Mobile number" value={values.mobileNumber} onChange={(e) => onInputChange('mobileNumber', e.target.value)} />
                        </Field>
                    </FieldGroup>
                    <FieldGroup>
                        <Select onValueChange={(e) => onInputChange('selectedFruit', e)}>
                            <SelectTrigger className="w-full bg-white">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Fruits</SelectLabel>
                                    <SelectItem value="apple">Apple</SelectItem>
                                    <SelectItem value="banana">Banana</SelectItem>
                                    <SelectItem value="blueberry">Blueberry</SelectItem>
                                    <SelectItem value="grapes">Grapes</SelectItem>
                                    <SelectItem value="pineapple">Pineapple</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FieldGroup>
                    <FieldGroup>
                        <RadioGroup defaultValue="comfortable" className="w-fit flex" onValueChange={(e) => onInputChange('radioButton', e)}>
                            <RadioGroupItem className="bg-white" value="yes" id="yes" />
                            <Label className="text-white" htmlFor="yes">Yes</Label>
                            <RadioGroupItem className="bg-white" value="no" id="no" />
                            <Label className="text-white" htmlFor="no">No</Label>
                        </RadioGroup>
                    </FieldGroup>
                </FieldSet>
                <div className="flex flex-col py-4 gap-4">
                    <Button value="Submit" type="submit" className="bg-pink-500 p-4 rounded text-white uppercase" />
                    <div className="flex items-center gap-2">
                        <div className="grow border h-0"></div>
                        <CardTitle className="text-white">or</CardTitle>
                        <div className="grow border h-0"></div>
                    </div>
                    <Button value="Clear" type="submit" className="bg-gray-500 p-4 rounded text-white uppercase" />
                </div>
            </form>
        </Card>
    )
}