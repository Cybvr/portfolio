'use client'

import { useState, type ReactElement } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog'

interface DeleteConfirmDialogProps {
    itemType: 'post' | 'project'
    itemName: string
    onConfirm: () => Promise<void>
    trigger: ReactElement
}

export default function DeleteConfirmDialog({
    itemType,
    itemName,
    onConfirm,
    trigger,
}: DeleteConfirmDialogProps) {
    const [open, setOpen] = useState(false)
    const [deleting, setDeleting] = useState(false)

    const handleConfirm = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setDeleting(true)

        try {
            await onConfirm()
            setOpen(false)
        } catch {
            // The parent displays the Firebase error; keep the dialog open for recovery.
        } finally {
            setDeleting(false)
        }
    }

    return (
        <AlertDialog open={open} onOpenChange={(nextOpen) => !deleting && setOpen(nextOpen)}>
            <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
            <AlertDialogContent className="max-w-md rounded-2xl border-border bg-background p-6 sm:rounded-2xl">
                <AlertDialogHeader className="space-y-3 text-left">
                    <AlertDialogTitle className="font-syne text-xl font-bold tracking-tight">
                        Delete “{itemName}”?
                    </AlertDialogTitle>
                    <AlertDialogDescription className="leading-relaxed text-muted-foreground">
                        This permanently removes the {itemType} from the site. This action cannot be undone.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="mt-3 gap-2 sm:space-x-0">
                    <AlertDialogCancel disabled={deleting} className="h-11 rounded-xl">
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        disabled={deleting}
                        onClick={handleConfirm}
                        className="h-11 rounded-xl bg-destructive px-5 text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive"
                    >
                        {deleting ? 'Deleting…' : `Delete ${itemType}`}
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
