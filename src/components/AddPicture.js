import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AddPicture = ({ image, setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [17, 12],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.mainPhotoWrapper}>
      {image ? (
        <View style={styles.imageWrapper}>
          <ImageBackground
            source={{ uri: image }}
            imageStyle={{
              borderRadius: 8,
            }}
            style={styles.image}
          >
            <Text style={styles.btnCameraFull} onPress={pickImage}>
              <AntDesign
                name="camera"
                size={24}
                color="#FFFFFF"
                style={styles.iconCamera}
              />
            </Text>
          </ImageBackground>
        </View>
      ) : (
        <View style={styles.photoWrapper}>
          <Text style={styles.btnCamera} onPress={pickImage}>
            <AntDesign
              name="camera"
              size={24}
              color="#BDBDBD"
              style={styles.iconCamera}
            />
          </Text>
        </View>
      )}

      <Text style={styles.text}>
        {image ? 'Редагувати фото' : 'Завантажте фото'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPhotoWrapper: {
    marginBottom: 32,
  },
  photoWrapper: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 240,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  btnCamera: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF',
    padding: 18,
  },
  btnCameraFull: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF4D',
    padding: 18,
  },
  text: {
    color: '#BDBDBD',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default AddPicture;
