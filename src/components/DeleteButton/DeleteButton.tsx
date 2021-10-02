import React, { useState, useRef, CSSProperties } from 'react';
import {
    Button,
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
} from '@chakra-ui/react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { deleteLecture, getLectures } from '@lib';
import { useAppContext } from '@contexts';

const DeleteButton = ({ documentId, style = {} }: { documentId: string; style?: React.CSSProperties }) => {
    const { setLectures } = useAppContext();
    const [isLoading, setIsLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = useRef();

    const hanleDelete = async () => {
        setIsLoading(true);
        await deleteLecture({ documentId });
        setIsOpen(false);
        let lectures = await getLectures();
        setLectures(lectures);
        setIsLoading(false);
    };

    return (
        <>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    ...style,
                }}
            >
                <Button leftIcon={<RiDeleteBin2Fill />} size={'xs'} onClick={() => setIsOpen(true)} colorScheme='red'>
                    DELETE
                </Button>
            </div>
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete Lecture
                        </AlertDialogHeader>

                        <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose} size={'sm'}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={hanleDelete} ml={3} size={'sm'} isLoading={isLoading}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
};

export default DeleteButton;
