import { useRef } from "react";
import { Input } from "./Input";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Field, FieldGroup, FieldSet } from "./ui/field";
import { Button } from "./Button";

type Props = {
    onLoad: () => void
    loadEmailRef: React.RefObject<HTMLInputElement | null>
}

export function LoadForm({ onLoad, loadEmailRef }: Props) {
    return (
        <Card className="my-4 w-3/4 max-w-7xl bg-gray-300">
            <CardHeader>
                <div>
                    <div className="grow border h-0"></div>
                    <CardTitle className="text-white">Already filled out form?</CardTitle>
                    <div className="grow border h-0"></div>
                </div>
            </CardHeader>
            <form
                onSubmit={(e) => {
                    e.preventDefault()
                    onLoad()
                }}
                className="w-full"
            >
                <FieldSet>
                    <FieldGroup>
                        <Field>
                            <Input
                                className="bg-white"
                                id="email"
                                autoComplete="off"
                                type="email"
                                ref={loadEmailRef}
                                placeholder="example@mail.com"
                            />
                        </Field>
                    </FieldGroup>
                </FieldSet>
                <div className="flex flex-col py-4 gap-4">
                    <Button value="Load" type="submit" className="bg-pink-500 p-4 rounded text-white uppercase" />
                    <Button value="Create New" type="submit" className="bg-gray-500 p-4 rounded text-white uppercase" />
                </div>
            </form>
        </Card>
    )
}