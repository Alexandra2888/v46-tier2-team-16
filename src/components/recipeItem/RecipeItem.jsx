import { Link } from 'react-router-dom';
import styles from './RecipeItem.module.css';
import { BiSolidLike, BiSolidDislike, BiBowlHot } from 'react-icons/bi';

const RecipeItem = ({ selectedRecipe }) => {
    console.log('selectedRecipe', selectedRecipe);

    const sections = selectedRecipe.sections[0].components;

    return !!selectedRecipe ? (
        <section className={styles.containerDetails}>
            <div key={selectedRecipe.id} className={styles.insideContainerDetails}>

                <div className={styles.mainCtn} id="top">
{/* title + category */}
                        <div className={styles.containerTitle}>
                            <h3 className={styles.itemName}>{selectedRecipe.name}</h3>
                            <p className={styles.itemCategory}> 
                                Category: {selectedRecipe.total_time_tier?.display_tier}
                            </p> 
                        </div>
{/* info prep time                            */}
                        <div className={styles.containerInfo}>
                            <span className={styles.insideInfo}>
                                <h6 className={styles.itemPrep}>Prep Time:</h6>
                                <p>{selectedRecipe.prep_time_minutes} minutes</p>
                            </span>
                            <span className={styles.insideInfo}>
                                <h6 className={styles.itemCook}>Cook Time: </h6>
                                <p>{selectedRecipe.cook_time_minutes} minutes</p>
                            </span>
                           <span className={styles.insideInfo}>
                                <h6 className={styles.itemServ}> <BiBowlHot /> Serves:</h6>
                                <p> {selectedRecipe.num_servings} servings</p>
                           </span>
                           
                        
                            {/* <p className={styles.itemLike}>
                                <BiSolidLike color="green" /> <span>{selectedRecipe.user_ratings.count_positive}</span>
                            </p>
                            <p className={styles.itemLike}>
                                <BiSolidDislike color="red" /> <span>{selectedRecipe.user_ratings.count_negative}</span>
                            </p> */}
                        </div>
                </div>

{/* ingredients */}
                <div className={styles.secondContainer}>
                    <div className={styles.containerIngr}>
                        <h4 className={styles.itemIngr}>Ingredients:</h4>
                            <ul>
                                {sections.map((item) => (
                                    <li key={item.id}>{item.raw_text}</li>
                                ))}
                            </ul>
                    </div>
{/* direcions */}
                    <div className={styles.containerDirec}>
                        <h4>Directions:</h4>
                        <ul>{selectedRecipe.instructions.map((step, idx) => (
                            <li key={idx} className={styles.itemStep}>
                                <p>{step.position}. </p><p className={styles.stepText}>{step.display_text}</p>
                            </li>
                        ))}
                        </ul>
                    </div>
{/* image */}
                    <div className={styles.containerImage}>
                        <img src={selectedRecipe.thumbnail_url} alt={selectedRecipe.name} />
                    </div>
                </div>


            </div>
            <div className={styles.facts}>
                <video controls width="450" className={styles.video}>
                    <source src={selectedRecipe.original_video_url} type="application/x-mpegURL" />
                </video>
                <div className={styles.nutritionContainer}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.tableLeft}>Nutritions</th>
                                <th className={styles.tableRight}>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className={styles.tableLeft}>Calories:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.calories}kCal</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Carbohydrates:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.carbohydrates} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Fat:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.fat} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Fiber:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.fiber} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Protein:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.protein} g</td>
                            </tr>
                            <tr>
                                <td className={styles.tableLeft}>Sugar:</td>
                                <td className={styles.tableRight}>{selectedRecipe.nutrition.sugar} g</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className={styles.tableNote}>*per 100g of serving</p>
                </div>
            </div>

            <Link to="/" className={styles.btn}>
                Go Back
            </Link>
        </section>
    ) : (
        <></>
    );
};

export default RecipeItem;
