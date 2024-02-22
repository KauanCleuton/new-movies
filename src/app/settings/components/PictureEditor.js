import React, { useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { Button, Slider, Box, IconButton, Dialog, DialogContent, DialogActions, Avatar, DialogTitle } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AccountCircle from '@mui/icons-material/AccountCircle';

const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
});

const ImageEditor = styled(Box)({
    margin: '20px'
});

const StyledSlider = styled(Slider)({
    width: '300px',
    margin: '20px'
});

const Input = styled('input')({
    display: 'none'
});

const Badge = styled('div')({
    position: 'relative',
    display: 'inline-block'
});

const StyledAvatar = styled(Avatar)({
    width: '300px',
    height: '300px',
    cursor: 'pointer'
});

const StyledAccountCircle = styled(AccountCircle)({
    width: '300px',
    height: '300px'
});

const BadgeIcon = styled(IconButton)({
    position: 'absolute',
    bottom: '0px',
    right: '0px'
});

const ProfilePictureEditor = () => {
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [editor, setEditor] = useState(null);
    const [open, setOpen] = useState(false);
    const [openImageDialog, setOpenImageDialog] = useState(false);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setOpen(true);
        }
    };
    const handleScaleChange = (e) => {
        setScale(e.target.value);
    };

    const setEditorRef = (editor) => setEditor(editor);

    const handleSave = () => {
        if (editor) {
            const canvas = editor.getImageScaledToCanvas();
            process.env.NODE_ENV !== 'production' && console.log(canvas.toDataURL());
            setOpen(false);
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenImageDialog = () => {
        setOpenImageDialog(true);
    };

    const handleCloseImageDialog = () => {
        setOpenImageDialog(false);
    };
    return (
        <StyledBox>
            <Badge>
                {image ? <StyledAvatar src={image} onClick={handleOpenImageDialog} /> : <StyledAccountCircle sx={{ color: '#D3D3D3' }} />}
                <label htmlFor="icon-button-file">
                    <Input accept="image/*" id="icon-button-file" type="file" onChange={handleImageUpload} />
                    <BadgeIcon color="secondary" aria-label="upload picture" component="span">
                        <PhotoCamera sx={{color: "#001928"}} />
                    </BadgeIcon>
                </label>
            </Badge>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <ImageEditor>
                        <AvatarEditor
                            ref={setEditorRef}
                            image={image}
                            width={200}
                            height={200}
                            border={50}
                            scale={scale}
                            borderRadius={100}
                            rotate={0}
                        />
                        <StyledSlider min={1} max={3} step={0.01} value={scale} onChange={handleScaleChange} />
                    </ImageEditor>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" variant="contained" onClick={handleSave}>
                        Salvar alterações
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openImageDialog} onClose={handleCloseImageDialog}>
                <DialogTitle>Imagem de Perfil</DialogTitle>
                <DialogContent>
                    <img src={image} alt="Perfil" style={{ width: '100%', height: 'auto' }} />
                </DialogContent>
            </Dialog>
        </StyledBox>
    );
};

export default ProfilePictureEditor;
