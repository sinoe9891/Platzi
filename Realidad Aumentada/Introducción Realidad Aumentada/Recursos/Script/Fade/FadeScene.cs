using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FadeScene : MonoBehaviour {

    //name of the scene you want to load
    public string scene;
    public Color loadToColor = Color.white;
    public object boton;
    public float tiempo = 5f;

    // Update is called once per frame
    public void Fade()

    {
        //Button to load the new scene

        Initiate.Fade(scene, loadToColor, tiempo);
    }
}
