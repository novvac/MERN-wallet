import React from 'react';
import { SubmitHandler, Controller, useForm } from 'react-hook-form';
import { Button, Grid } from '@mui/material';

type PropsI = {
    items: any[];
    submitText?: string;
}

export default function FormControl(props: PropsI) {
    const { control, handleSubmit } = useForm();

    const onSubmit: SubmitHandler<any> = data => {
        console.log(data);
    }

    const Item = ({itemProps, ...item}: any) => {
        return (
            <Controller
                control={control}
                name={item.name}
                rules={item.rules}
                render={({ field, formState: { errors } }) => {
                    return (
                        React.createElement(item.type, {
                            ...itemProps,
                            ...field,
                            fullWidth: true,
                            required: item.rules?.required,
                            helperText: errors?.[item.name]?.message,
                            error: errors?.[item.name]
                        })
                    )
                }}
            />
        )
    }

    const GridItems = props.items.map(({gridProps, ...data}: any) => {
        return (
            <Grid item {...gridProps}>
                {Item(data)}
            </Grid>
        )
    })
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
                {GridItems}
            </Grid>

            <Button
                type="submit"
                variant='contained'
                size='large'
                fullWidth
                sx={{ mt: 3 }}
            >
                {props.submitText ?? 'Submit'}
            </Button>
        </form>
    )
}