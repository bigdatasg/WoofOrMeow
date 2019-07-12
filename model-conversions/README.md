## Tensorflowjs Converter

**Objective: Convert the pre trained model to usable format.**

This is a subdirectory that makes use of the converter utility by Tensorflowjs to convert a pre-trained model in appropriate format
    In this case a Keras, HDF5 format file
to the desired format that can be loaded by Tensorflowjs
    Such a format is optimized for use in a browser environment - a JSON file.)

**Ensure you have python 3 in your system**

[Download Pre trained model](https://www.kaggleusercontent.com/kf/5741792/eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..l1RXBI6Fph39HBE-HS5ZNQ.4B52AcYeIOl8ymNcAl1avgL5PhlbjlgoK6_3_gAWxAOmppdYVtdsQJ3TB_UoDWvgxSDEAYU4VLD2pYMmokfHzCC8ablMw0ym8B1PRsxE_gtk0zk6RdpjbmkYBb1kUWvLDlNnGDu4l0gan8vYvqGKxzUjHrHYEOQg3NQR8e4UT6w.s7adp_6-sQl29QLyQZVJsA/dogsandcat_vgg16_model_tl.h5)

#### Steps
1. This directory is already available part of the repository: WoofOrMeow
2. While inside the WoofOrMeow directory run the following commands:
`python3 -m venv model-conversions`
3. Switch to the directory: model-conversions
4. Activate the virtual environment:
`source bin/activate`
5. Install the dependencies
`pip install -r requirements.txt`
6. Convert the model
```
tensorflowjs_converter --input_format=keras \
input/dogsandcat_vgg16_model_tl.h5 output
```

**Your converted usable model is ready inside the following directory!**
`usable-model`

Copy the contents of this folder and paste it inside the `usable-model` folder inside the `WoofOrMeow` folder and you are ready! 