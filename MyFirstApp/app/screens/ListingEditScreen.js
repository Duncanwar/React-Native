import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import CategoryPickerItem from "../components/CategoryPickerItem";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.string().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    label: "Furniture",
    value: 1,
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
  },
  {
    label: "Clothing",
    value: 2,
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
  },
  {
    label: "Camera",
    value: 3,
    icon: "camera",
    backgroundColor: "#fed330",
  },
  {
    label: "Cars",
    value: 4,
    icon: "car",
    backgroundColor: "#fd9644",
  },
  {
    label: "Games",
    value: 5,
    icon: "cards",
    backgroundColor: "#26de81",
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#45a632",
    icon: "book",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#45a211",
    icon: "note",
    label: "Other",
    value: 9,
  },
];

function ListingEditingScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Form
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          // numberOfColumns={3}
          // PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="desccription"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
  },
});
export default ListingEditingScreen;
