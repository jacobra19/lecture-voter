import React, { useState } from 'react';
import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalBody,
    ModalFooter,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    Input,
} from '@chakra-ui/react';

import { UrlInput } from '@components';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
const AddLectureButton = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [url, setUrl] = useState('');

    const youtubeParser = (url: string) => {
        var regExp =
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return match && match[7].length == 11 ? match[7] : false;
    };

    return (
        <>
            <Button onClick={onOpen}>ADD LECTURE</Button>

            <Modal
                isOpen={isOpen}
                onClose={() => {
                    onClose();
                    setUrl('');
                }}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalBody style={{ padding: 24 }}>
                        <Input
                            placeholder='Lecture URL'
                            onChange={(e) => {
                                let parsedId = youtubeParser(e.target.value);
                                parsedId && setUrl(parsedId);
                            }}
                        />
                        {url && <YoutubeEmbed videoId={url} width={400} />}
                    </ModalBody>

                    <ModalFooter style={{ padding: '0px 24px 24px 24px' }}>
                        <Button
                            colorScheme='blue'
                            onClick={onClose}
                            disabled={!url}
                            isFullWidth
                        >
                            Save
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default AddLectureButton;
