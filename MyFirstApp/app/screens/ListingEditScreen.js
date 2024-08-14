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
    label: "Cameras",
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
    backgroundColor: "#",
  },
  {
    label: "Cameras",
    value: 6,
    icon: "camera",
    backgroundColor: "#fed330",
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
          PickerItemComponent={CategoryPickerItem}
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
