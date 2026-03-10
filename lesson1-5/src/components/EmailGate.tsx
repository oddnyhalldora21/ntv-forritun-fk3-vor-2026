import { Input } from "./Input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup, FieldSet } from "./ui/field";

type Props = {
    email: string
    onEmailChange: (value: string) => void
}

export function EmailGate({ email, onEmailChange }: Props) {
    return (
        <Card className="w-3/4 max-w-7xl bg-gray-300">
            <CardHeader>
                <CardTitle className="text-gray-500">Please enter your email to continue</CardTitle>
            </CardHeader>
            <FieldSet>
                <FieldGroup>
                    <Field>
                        <Input
                            className="bg-white"
                            autoComplete="off"
                            type="email"
                            placeholder="example@mail.com"
                            value={email}
                            onChange={(e) => onEmailChange(e.target.value)}
                        />
                    </Field>
                </FieldGroup>
            </FieldSet>
        </Card>
    )
}